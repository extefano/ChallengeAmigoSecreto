
# Amigo Secreto

Una aplicación web interactiva para organizar el sorteo de amigos secretos de manera divertida y fácil.

## Descripción

Amigo Secreto es una aplicación web que permite a los usuarios agregar nombres de participantes y realizar un sorteo aleatorio para asignar amigos secretos. La aplicación cuenta con una interfaz moderna y responsiva que hace del proceso de sorteo una experiencia agradable.

## Características

- **Interfaz intuitiva**: Diseño moderno y fácil de usar
- **Agregar participantes**: Añade nombres de amigos de forma dinámica
- **Sorteo automático**: Realiza el sorteo de manera aleatoria
- **Diseño responsivo**: Funciona en dispositivos móviles y de escritorio
- **Accesibilidad**: Incluye atributos ARIA para mejor accesibilidad
- **Animaciones**: Efectos visuales suaves y atractivos


## Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar la aplicación, incluso si nunca has usado Git o servidores locales:

### 1. Clonar el repositorio

1. Haz clic en el botón verde "Code" en [GitHub](https://github.com/extefano/ChallengeAmigoSecreto) y copia la URL.
2. Abre una terminal (o PowerShell en Windows) y ejecuta:
   ```bash
   git clone https://github.com/extefano/ChallengeAmigoSecreto.git
   cd ChallengeAmigoSecreto
   ```
   > Si no tienes Git instalado, descárgalo desde [git-scm.com](https://git-scm.com/) e instálalo.

### 2. Ejecutar la aplicación

#### Opción A: Abrir directamente

1. Abre la carpeta descargada.
2. Haz doble clic en `index.html` para abrir la app en tu navegador.
   - ¡Listo! Puedes usar la aplicación sin instalar nada más.

#### Opción B: Usar un servidor local (recomendado para evitar problemas de rutas)

**Con Python:**
1. Instala Python desde [python.org](https://www.python.org/) si no lo tienes.
2. Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   python -m http.server 8000
   ```
3. Abre [http://localhost:8000](http://localhost:8000) en tu navegador.

**Con Node.js:**
1. Instala Node.js desde [nodejs.org](https://nodejs.org/) si no lo tienes.
2. Instala el paquete `serve`:
   ```bash
   npm install -g serve
   serve .
   ```
3. Abre el enlace que aparece en la terminal (por ejemplo, [http://localhost:5000](http://localhost:5000)).

---

> **¿No tienes experiencia?**
> Solo necesitas descargar el proyecto y abrir `index.html` con doble clic. Para desarrollo, usa Python o Node.js como se indica arriba.

## Uso

1. **Agregar participantes:**
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista de participantes

2. **Realizar el sorteo:**
   - Una vez agregados todos los participantes
   - Haz clic en el botón "Sortear amigo"
   - La aplicación mostrará los resultados del sorteo

3. **Reiniciar:**
   - Recarga la página para comenzar un nuevo sorteo

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox
- **JavaScript**: Funcionalidad interactiva y lógica del sorteo
- **Google Fonts**: Tipografías Inter y Merriweather
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla

## Estructura del Proyecto

```
ChallengeAmigoSecreto/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Este archivo
```

## Características del Diseño

- **Paleta de colores**: Azul primario (#4B69FD) con acentos naranjas
- **Tipografías**: Inter para texto general, Merriweather para títulos
- **Layout**: Diseño en flexbox con secciones bien definidas
- **Efectos visuales**: Sombras y hover effects para mejor UX

## Funcionalidades Técnicas

- **Validación de entrada**: Verifica que se ingresen nombres válidos
- **Prevención de duplicados**: Evita nombres repetidos en la lista
- **Sorteo aleatorio**: Algoritmo que garantiza asignaciones únicas
- **Manejo de errores**: Validaciones para casos edge

## Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

**extefano** - [GitHub](https://github.com/extefano)

## Agradecimientos

- Inspirado en la tradición del amigo secreto
- Diseño inspirado en aplicaciones modernas de sorteo
- Iconos y recursos visuales optimizados para la experiencia del usuario

---

