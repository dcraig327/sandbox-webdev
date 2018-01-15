window.onload = function() {
  // Create constants
  const section = document.querySelector('section');
  const videos = [
    { 'name' : 'crystal', 'offline' : 'no' },
    { 'name' : 'elf', 'offline' : 'no' },
    { 'name' : 'frog', 'offline' : 'no' },
    { 'name' : 'monster', 'offline' : 'no' },
    { 'name' : 'pig', 'offline' : 'no' },
    { 'name' : 'rabbit', 'offline' : 'no' }
  ];
  // Create an instance of a db object for us to store our database in
  let db;

  // Loop through the video titles and display each one
  for(let i = 0; i < videos.length; i++) {
    if(videos[i].offline === 'no') {
      // fetch the video from the network if it is not saved in the IDB
      fetchVideoFromNetwork(videos[i]);
    } else {
      // fetch the video from the IDB if it is
      fetchVideoFromIDB(videos[i]);
    }
  }

  // Define fetchVideoFromIDB() function
  function fetchVideoFromIDB(video) {
    // Open transaction, get object store, and get() the video by name
    let objectStore = db.transaction('videos').objectStore('videos');
    let request = objectStore.get(video);
    // After the request is successful, run DisplayVideo() to show it on the page
    request.onsuccess = function() {
      // Blobs are stored in the IDB, so need to create object URLs out of these
      let mp4 = URL.createObjectURL(request.result.mp4);
      let webm = URL.createObjectURL(request.result.webm);

      displayVideo(mp4, webm, request.result.name);
    }
  }

  // Define the fetchVideoFromNetwork() function
  function fetchVideoFromNetwork(video) {
    // Fetch the MP4 and WebM version of the video using fetch() function
    let mp4Blob = fetch('videos/' + video.name + '.mp4').then(response =>
      response.blob()
    );
    let webmBlob = fetch('videos/' + video.name + '.webm').then(response =>
      response.blob()
    );;

    // Only run the next code when both promises have fulfilled
    Promise.all([mp4Blob, webmBlob]).then(function(values) {
      displayVideo(values[0], values[1], video.name);
      storeVideo(values[0], values[1], video.name);
    });
  }

  function storeVideo(mp4Blob, webmBlob, name) {
    let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
    let record = {
      mp4 : mp4Blob,
      webm : webmBlob,
      name : name
    }
    let request = objectStore.add(record);

    request.onsuccess = function() {
      console.log('Record addition attempt finished');
    }

    request.onerror = function() {
      console.log(request.error);
    }

  };

  // Define the displayVideo() function
  function displayVideo(mp4Blob, webmBlob, title) {
    // Create DOM elements to embed video in the page
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    h2.textContent = title;
    let video = document.createElement('video');
    video.controls = true;
    let source1 = document.createElement('source');
    source1.src = URL.createObjectURL(mp4Blob);
    source1.type = 'video/mp4';
    let source2 = document.createElement('source');
    source2.src = URL.createObjectURL(webmBlob);
    source2.type = 'video/webm';

    // Embed DOM elements into page
    section.appendChild(article);
    article.appendChild(h2);
    article.appendChild(video);
    video.appendChild(source1);
    video.appendChild(source2);
  }

  // Open our database; it is created if it doesn't already exist
  // (see onupgradeneeded below)
  let request = window.indexedDB.open('videos', 1);

  // onerror handler signifies that the database didn't open successfully
  request.onerror = function() {
    console.log('Database failed to open');
  };

  // onsuccess handler signifies that the database opened successfully
  request.onsuccess = function() {
    console.log('Database opened succesfully');

    // Store the opened database object in the db variable. This is used a lot below
    db = request.result;

    for(let j = 0; j < videos.length; j++) {
      checkOffline(videos[j]);
    }
  };

  // Setup the database tables if this has not already been done
  request.onupgradeneeded = function(e) {

    // Grab a reference to the opened database
    let db = e.target.result;

    // Create an objectStore to store our notes in (basically like a single table)
    // including a auto-incrementing key
    let objectStore = db.createObjectStore('videos', { keyPath: 'name' });

    // Define what data items the objectStore will contain
    objectStore.createIndex('mp4', 'mp4', { unique: false });
    objectStore.createIndex('webm', 'webm', { unique: false });

    console.log('Database setup complete');
  };

  // Define checkOffline() function to check whether any of the videos
  // have been previously saved offline

  function checkOffline(video) {
    let objectStore = db.transaction('videos').objectStore('videos');
    var request = objectStore.get(video.name);
    request.onsuccess = function() {
      if(request.result) {
        video.offline = 'yes';
      };
    };
  }

};
