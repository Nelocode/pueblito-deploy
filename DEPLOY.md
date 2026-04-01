# Guía de Despliegue en Easypanel

El proyecto ha sido preparado para ser desplegado automáticamente en **Easypanel** utilizando el `Dockerfile` optimizado dentro de la carpeta `web/`.

## Configuración en el Panel de Easypanel

Para que el despliegue sea exitoso, asegúrate de configurar los siguientes parámetros en tu panel:

1.  **Source (Origen)**: 
    *   Repo: `https://github.com/Nelocode/pueblito`
    *   Branch: `main`

2.  **Build Configuration (Configuración de Construcción)**:
    *   **Build Type**: `Dockerfile`
    *   **Docker Context (Contexto de construcción)**: `/` (Raíz del repo) o `./`
    *   **Dockerfile Path**: `web/Dockerfile`

3.  **Environment Variables (Variables de Entorno)**:
    *   `NODE_ENV`: `production`
    *   `PORT`: `3000`

4.  **Network (Red)**:
    *   Expone el puerto **3000**.

## Notas Técnicas
*   El `Dockerfile` utiliza la salida `standalone` de Next.js para reducir el tamaño de la imagen y mejorar el rendimiento.
*   Se han incluido todas las revisiones recientes, las nuevas imágenes de eventos, ciudades de inspiración y los **carruseles de imágenes para las tipologías de apartamentos** en la sección de inversión.

---
*Preparado por Antigravity*
