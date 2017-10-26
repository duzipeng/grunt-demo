module.exports = function (grunt) {

  //Project configuration
  grunt.initConfig({
    log: {
      foo: [1, 2, 3],
      bar: 'hello world',
      baz: false
    }
  });

  // 多任务
  grunt.registerMultiTask('log', 'Log stuff', function () {
    grunt.log.writeln(this.target + ': ' + this.data)
  });
  // 普通任务
  grunt.registerTask('foo', 'my "foo" task.', function () {
    grunt.task.run('bar', 'baz');
  });
  // 默认任务
  grunt.registerTask('default', 'My "default" task description.', function () {
    grunt.log.writeln('Currently running the "default" task.');
  });
  // 自定义任务
  grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function () {
    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();
    // Run some sync stuff.
    grunt.log.writeln('Processing task...');
    // And some async stuff.
    setTimeout(function () {
      grunt.log.writeln('All done!');
      done();
    }, 1000)
  })
}