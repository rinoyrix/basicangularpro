'use strict';

describe('Service: navRoller', function () {

  // load the service's module
  beforeEach(module('alFjrApp'));

  // instantiate service
  var navRoller;
  beforeEach(inject(function (_navRoller_) {
    navRoller = _navRoller_;
  }));

  it('should do something', function () {
    expect(!!navRoller).toBe(true);
  });

});
