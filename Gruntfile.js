module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			public: {
				cwd: 'public', //diretorio de trablho
				src: '**', // origem
				dest: 'dist', //destino
				expand: true //mapeamento dinâmico
			}
		},
		clean: {
              dist: {
                  src: 'dist'
              }
         }
	});

	grunt.registerTask('dist', ['clean', 'copy']); // Registrar novas tasks que chamam outras na sequência que definirmos
	grunt.registerTask('default', ['dist']);
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
}