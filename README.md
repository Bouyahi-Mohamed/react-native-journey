# Welcome to your Expo app 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## NativeWind (Tailwind CSS) Setup

This project uses [NativeWind v4](https://www.nativewind.dev/) to bring Tailwind CSS utility classes to React Native.

### 1. Install dependencies

```bash
npm install nativewind tailwindcss
```

### 2. Initialize Tailwind config

```bash
npx tailwindcss init
```

### 3. Configure `tailwind.config.js`

Add the NativeWind preset and point `content` to your source files:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Create the global CSS file

Create `app/globals.css` with the standard Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Configure Metro (`metro.config.js`)

Wrap the Expo Metro config with `withNativeWind` and point it to the CSS file:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/globals.css" });
```

### 6. Configure Babel (`babel.config.js`)

Add the NativeWind Babel preset and set `jsxImportSource`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### 7. Import the CSS in the root layout

In `app/_layout.tsx`, import the global stylesheet so Tailwind is active everywhere:

```tsx
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack />;
}
```

### 8. Add TypeScript types

Create `nativewind-env.d.ts` at the project root:

```ts
/// <reference types="nativewind/types" />
```

### 9. Use Tailwind classes in your components

You can now use `className` on any React Native component:

```tsx
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-white text-xl font-bold">Hello NativeWind!</Text>
    </View>
  );
}
```

---

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
