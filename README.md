# ⏱️ Pomodoro Timer

Una aplicación de escritorio moderna para gestionar tu tiempo utilizando la **técnica Pomodoro**. Construida con React, TypeScript y Electron.

>  **Proyecto basado en:** [Crear una aplicación Pomodoro con React](https://youtu.be/K9eHZugy6lc?si=4SufbgHikuSAgAaL)

> **Demo:** [Pomodoro](https://pomodoro-erika0306.vercel.app/) 
  
##  Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Desarrollo](#desarrollo)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)

## ✨ Características

- **Timer Pomodoro**: Sesiones de trabajo de 25 minutos con descansos
- **Fácil de usar**: Interfaz intuitiva y limpia
- **Aplicación de Escritorio**: Construida con Electron
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla
- **React + TypeScript**: Código tipado y mantenible
- **Totalmente Testeada**: Suite de pruebas incluida

## Requisitos

- **Node.js** v14 o superior
- **npm** v6 o superior

## Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Erika0306/pomodoro.git
cd pomodoro
```

2. **Instalar dependencias**
```bash
npm install
```

## Uso

### Modo Desarrollo (Web)

Para iniciar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

### Modo Escritorio (Electron)

Para ejecutar la aplicación como aplicación de escritorio:

```bash
npm run electron
```

### Construir para Producción

Para crear una compilación optimizada:

```bash
npm run build
```

### Ejecutar Pruebas

Para ejecutar la suite de pruebas:

```bash
npm test
```

## Desarrollo

### Estructura del Proyecto

```
pomodoro/
├── public/
│   ├── electron.js          # Configuración de Electron
│   ├── index.html           # HTML principal
│   ├── manifest.json        # Manifest de PWA
│   └── preload.js           # Script de preload de Electron
├── src/
│   ├── App.tsx              # Componente principal
│   ├── App.css              # Estilos principales
│   ├── index.tsx            # Punto de entrada
│   ├── assets/              # Recursos estáticos (imágenes, íconos)
│   └── custom.d.ts          # Tipos personalizados
├── package.json             # Dependencias del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

### Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia la aplicación en modo desarrollo |
| `npm run electron` | Ejecuta la aplicación como Electron |
| `npm run build` | Construye la aplicación para producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run eject` | Expone la configuración de react-scripts |

### Configuración de TypeScript

El proyecto utiliza TypeScript para mayor seguridad de tipos. Consulta `tsconfig.json` para ver la configuración.

## Tecnologías

### Frontend
- **React** ^19.2.0 - Librería de UI
- **TypeScript** ^4.9.5 - Lenguaje tipado
- **React DOM** ^19.2.0 - Renderizado en DOM

### Desktop
- **Electron** - Framework para aplicaciones de escritorio

### Testing
- **Testing Library** - Herramientas de testing
- **Jest** - Framework de testing

### Build
- **React Scripts** 5.0.1 - Herramientas de build


## Autor

**Erika0306**

- GitHub: [@Erika0306](https://github.com/Erika0306)


---

**¡Mejora tu productividad con la Técnica Pomodoro! ⏱️**
