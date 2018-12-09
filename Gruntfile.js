module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  instrument: {
      files: 'dist/main.js',
      options: {
        basePath: 'instrumented/',
        flatten: true
      }
    },
    clean: {
      test: ['instrumented/']
    },
    copy: {
      test: {
        files: [{
          expand: true,
          cwd: 'instrumented',
          src: 'main.js',
          dest: 'dist/'
        }]
      }
    },
	remapIstanbul: {
		build: {
			src: 'coverage/coverage.json',
			options: {
				reports: {
					'json': 'coverage/coverage-final.json'
				}
			}
		}
	},
    makeReport: {
      src: 'coverage/coverage-final.json',
      options: {
        type: 'lcov',
        dir: 'coverage'
      }
    }
  });
grunt.loadNpmTasks('remap-istanbul');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.registerTask('test', ['clean','instrument','copy']);
  grunt.registerTask('remap-istanbul', ['remapIstanbul']);
  grunt.registerTask('report', ['makeReport']);
};