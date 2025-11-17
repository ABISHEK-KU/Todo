# innoppl-todo

A lightweight **React + TypeScript** sample application built with **Vite**, showcasing:

- React 19 + TypeScript
- Redux Toolkit state management
- styled-components for UI primitives
- Local profile persistence using `localStorage`
- Todo list & dashboard pages
- Clean project structure with reusable components

This repository serves as a starter template for small internal tools, demos, or training projects that need quick authentication, profile management, and a basic dashboard/todo UI.

## Tech Stack

- Vite — lightning-fast dev server & build pipeline
- React 19 with TypeScript
- Redux Toolkit — predictable and scalable state management
- styled-components — customizable UI primitives
- localStorage — lightweight persistence for profile data

## Project Structure

```
src/
│── App.tsx                # Routes + main layout
│── main.tsx               # App entry point
│
│── store/
│     └── store.ts         # Redux store + RootState/AppDispatch types
│
│── reducer/               # Redux slices
│     ├── authReducer.ts
│     ├── profileReducer.ts
│     └── todoReducer.ts
│
│── view/                  # Page components
│     ├── Login.tsx
│     ├── DashBoard.tsx
│     ├── Profile.tsx
│     └── Todo.tsx
│
│── components/            # Shared UI components (Header, Sidebar, Layout)
│
│── style/                 # styled-components primitives & shared styles
│── types/                 # Shared TypeScript types
│
public/                    # Static assets
```

## Requirements

- Node.js 18+ (recommended)
- npm / pnpm / yarn

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Key Implementation Details

### Profile Persistence

`src/reducer/profileReducer.ts` saves profile data in localStorage under:

```
profileData
```

### Typed Selectors

Use RootState from store/store.ts:

```ts
const profile = useSelector((state: RootState) => state.profile);
```

### State Handling in Profile Page

To avoid React warning:
"avoid calling setState within useEffect"

The Profile View initializes editable state only once on mount, not inside an effect.

## Troubleshooting

### TypeScript issues

```bash
npm run build
```

### Vite dev server port issues

Default Vite port: 5173  
Update vite.config.ts if needed:

```ts
server: {
  port: 5173;
}
```

## License

This project currently has no license. Add one if publishing.

---

Last updated: 2025-11-17
