if (!Date.prototype.clone) {
  Object.defineProperty(Date.prototype, 'clone', {
    value: function(freeze) {
      if(typeof freeze === 'boolean' && freeze === false) {
        return this;
      }

      return new Date(this);
    }
  });
}