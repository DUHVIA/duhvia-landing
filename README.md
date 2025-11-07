# DUHVIA — Sitio Web Oficial

Sitio oficial de **DUHVIA**, organización dedicada a innovación digital:  
desarrollo web, e-commerce, plataformas a medida, branding/UX y contenido nativo para redes sociales.

## 🚀 Tecnologías utilizadas
- React + TypeScript + Vite  
- Tailwind CSS v4 (zero-config)  
- React Router  
- Framer Motion  
- Lucide React Icons

## ⚙️ Instalación y ejecución
```bash
npm install
npm run dev

🧱 Estructura

/src: código fuente (páginas, componentes, estilos)

/public: imágenes, favicon, OG, y recursos estáticos

/dist: salida de compilación (no se sube al repositorio)

📄 Licencia

MIT © 2025 DUHVIA

```

## ⚙️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm install` (o `yarn install` / `pnpm install`)

Instala todas las dependencias del proyecto definidas en `package.json`. **Debe ejecutarse antes de cualquier otro comando.**

### `npm run dev`

Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:5173](http://localhost:5173) en tu navegador para verla. Los cambios se recargarán automáticamente.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.
Agrupa React en modo de producción y optimiza el *build* para el mejor rendimiento.

---

## 🚀 Despliegue (Deploy)

Este proyecto utiliza la librería `gh-pages` para desplegar automáticamente a GitHub Pages.

### `npm run deploy`

Este comando ejecuta la secuencia de despliegue:

1.  **`npm run predeploy`**: Primero ejecuta `npm run build` para compilar los archivos finales.
2.  **`gh-pages -d dist`**: Luego sube el contenido de la carpeta `dist` a la rama `gh-pages` de tu repositorio de GitHub.

Una vez que el despliegue termine, el sitio estará disponible en la URL definida en el campo `homepage` de `package.json`.