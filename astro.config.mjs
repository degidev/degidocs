// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	vite: {
        resolve: {
            alias: {
                '@docs': '/content/docs',
                '@es': '/content/docs/es',
                '@assets': '/src/assets',
                '@components': '/src/components',
            }
        }
    },
	integrations: [
		starlight({
			customCss: ['./src/style/starlight.css'],
			title: 'degidocs',
			logo: {
                src: '@assets/degidocs.png',
                alt: 'Logo de la documentación'
            },
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/degidev/degidoc' }
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Bienvenida', link: '/' },
					],
				},
				{
					label: 'HTML',
					collapsed: true,
					items: [
						{ label: 'Introducción a HTML', link: '/guides/html/introduction/' },
						{ label: 'Estructura básica', link: '/guides/html/basic-structure/' },
						{ label: 'Estilos de Texto', link: '/guides/html/text-styling/' },
						{ label: 'Elementos y etiquetas', link: '/guides/html/elements-tags/' },
						{ label: 'Formularios', link: '/guides/html/forms/' },
						{ label: 'Vinculos e imágenes', link: '/guides/html/links-images/' },
						{ label: 'Listas', link: '/guides/html/lists/' },
						{ label: 'Tablas', link: '/guides/html/tables/' },
						{ label: 'Multimedia', link: '/guides/html/multimedia/' },
						{ label: 'Metadatos SEO', link: '/guides/html/meta-seo/' },
						{ label: 'HTML5 y semántica', link: '/guides/html/html5-semantic/' },

					],
				},
				{
					label: 'CSS',
					collapsed: true,
					items: [
						{ label: 'Introducción a CSS', link: '/guides/css/introduction/' },
						{ label: 'Selectores', link: '/guides/css/selectors/' },
						{ label: 'Modelo de caja', link: '/guides/css/box-model/' },
						{ label: 'Flexbox', link: '/guides/css/flexbox/' },
						{ label: 'Grid', link: '/guides/css/grid/' },
						{ label: 'Responsive Design', link: '/guides/css/responsive/' },
						{ label: 'Animaciones', link: '/guides/css/animations/' },
						{ label: 'Variables CSS', link: '/guides/css/variables/' },
					],
				},
				{
					label: 'JavaScript',
					collapsed: true,
					items: [
						{ label: '1. Introducción a JavaScript', link: '/guides/javascript/introduction/' },
						{ label: '2. Sintaxis y estructura básica', link: '/guides/javascript/syntax/' },
						{ label: '3. Variables y constantes', link: '/guides/javascript/variables/' },
						{ label: '4. Tipos de datos', link: '/guides/javascript/data-types/' },
						{ label: '5. Operadores', link: '/guides/javascript/operators/' },
						{ label: '6. Estructuras de control', link: '/guides/javascript/control-structures/' },
						{ label: '7. Funciones', link: '/guides/javascript/functions/' },
						{ label: '8. Arrays', link: '/guides/javascript/arrays/' },
						{ label: '9. Objetos', link: '/guides/javascript/objects/' },
						{ label: '10. Cadenas de texto', link: '/guides/javascript/strings/' },
						{ label: '11. Manipulación del DOM', link: '/guides/javascript/dom/' },
						{ label: '12. Eventos', link: '/guides/javascript/events/' },
						{ label: '13. Formularios y validaciones', link: '/guides/javascript/forms/' },
						{ label: '14. JSON y almacenamiento local', link: '/guides/javascript/storage/' },
						{ label: '15. Programación asíncrona', link: '/guides/javascript/async/' },
						{ label: '16. Clases y POO', link: '/guides/javascript/oop/' },
						{ label: '17. Módulos', link: '/guides/javascript/modules/' },
						{ label: '18. Expresiones regulares', link: '/guides/javascript/regex/' },
						{ label: '19. Manejo de errores', link: '/guides/javascript/error-handling/' },
						{ label: '20. Fetch API', link: '/guides/javascript/fetch-api/' }
					],
				},
				{
					label:'Librerías',
					collapsed: true,
					items: [
						{ label: 'tailwindcss', link: '/guides/libraries/tailwindcss/' },
						{ label: 'bootstrap icons', link: '/guides/libraries/bootstrap-icons/' },
						{ label: 'bootstrap', link: '/guides/libraries/bootstrap/' },
						{ label: 'bulma', link: '/guides/libraries/bulma/' },
						{ label: 'fontawesome', link: '/guides/libraries/fontawesome/' },
						{ label: 'sweetalert', link: '/guides/libraries/sweetalert/' },
						{ label: 'animations', link: '/guides/libraries/animations/' },
						{ label: 'tailwindcss animations', link: '/guides/libraries/tailwindcss-animations/' },
						{ label: 'plugin tailwindcss animations', link: '/guides/libraries/tailwindcss-animations-plugin/' },
					],
				},

				{
					label: 'Vue 3',
					collapsed: true,
					items: [
						{ label: '01. Introducción a Vue 3', link: '/guides/vue/introduction/' },
						{ label: '02. Estructura del Componente', link: '/guides/vue/component-structure/' },
						{ label: '03. Reactividad', link: '/guides/vue/reactivity/' },
						{ label: '04. Props y Eventos', link: '/guides/vue/props-events/' },
						{ label: '05. Computadas y Observadores', link: '/guides/vue/computed-watchers/' },
						{ label: '06. Ciclo de Vida', link: '/guides/vue/lifecycle/' },
						{ label: '07. Métodos y Funciones', link: '/guides/vue/methods-functions/' },
						{ label: '08. Formularios y Modelos', link: '/guides/vue/forms-models/' },
						{ label: '09. Directivas y Bindings', link: '/guides/vue/directives-bindings/' },
						{ label: '10. Slots', link: '/guides/vue/slots/' },
						{ label: '11. Comunicación entre Componentes', link: '/guides/vue/component-communication/' },
						{ label: '12. Estilos y CSS', link: '/guides/vue/styles-css/' },
						{ label: '13. Composables', link: '/guides/vue/composables/' },
						{ label: '14. Transiciones y Animaciones', link: '/guides/vue/transitions-animations/' },
						{ label: '15. Vue Router con Composition API', link: '/guides/vue/vue-router/' },
						{ label: '16. Pinia (Reemplazo de Vuex)', link: '/guides/vue/pinia/' },
						{ label: '17. Manejo de APIs y Fetch', link: '/guides/vue/api-fetch/' },
					],
				},
				{
					label: 'Laravel',
					collapsed: true,
					items: [
						{ label: '1. Introducción a Laravel', link: '/guides/laravel/introduction/' },
						{ label: '2. Instalación y Configuración', link: '/guides/laravel/installation/' },
						{ label: '3. Rutas (Routing)', link: '/guides/laravel/routing/' },
						{ label: '4. Controladores', link: '/guides/laravel/controllers/' },
						{ label: '5. Vistas con Blade', link: '/guides/laravel/blade/' },
						{ label: '6. Eloquent ORM', link: '/guides/laravel/eloquent/' },
						{ label: '7. Formularios y Validación', link: '/guides/laravel/forms-validation/' },
						{ label: '8. Autenticación y Autorización', link: '/guides/laravel/auth/' },
						{ label: '9. Migraciones y Base de Datos', link: '/guides/laravel/migrations-database/' },
						{ label: '10. API REST y JSON', link: '/guides/laravel/api-rest/' },
						{ label: '11. Archivos, Storage y Uploads', link: '/guides/laravel/storage-uploads/' },
						{ label: '12. Eventos, Listeners y Observers', link: '/guides/laravel/events-listeners/' },
						{ label: '13. Jobs, Queues y Workers', link: '/guides/laravel/jobs-queues/' },
						{ label: '14. Notificaciones y Correos', link: '/guides/laravel/notifications-mail/' }
					]	
				},	
				{
					label: 'Inertia',
					collapsed: true,
					items: [
						{ label: '1. Introducción a Inertia', link: '/guides/innertia/introduction/' },
					]	
				},	
				{
					label: 'Referencia',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
