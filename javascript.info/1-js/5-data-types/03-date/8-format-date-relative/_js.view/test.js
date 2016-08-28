describe("formatDate", function() {
  it("shows 1ms ago as \"right now\"", function() {
    assert.equal(formatDate(new Date(new Date - 1)), 'right now');
  });

  it('"30 seconds ago"', function() {
    assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
  });

  it('"5 minutes ago"', function() {
    assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
  });

  it("older dates as dd.mm.yyyy hh:mm", function() {
    assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
  });

});
