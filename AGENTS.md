# AGENTS.md - FlipCards

Este archivo orienta a cualquier agente que trabaje en esta copia local de FlipCards.

## Estado de esta copia

- Carpeta: `/Users/mac/Documents/App01.1 Flipcards`
- Origen: copia funcional de `/Users/mac/Documents/App01. FlipCards`
- Checkpoint de referencia: `check points/30-android-vercel-release/`
- Version Android actual: `1.0.5` con `versionCode 6`
- APK instalable actual: `play-store/release/flipcards-1.0.5-6-sideload.apk`
- Netlify produccion: `https://flipcards-mobile-android-preview.netlify.app`
- Vercel produccion web: `https://flipcards-mobile.vercel.app`
- Deploy publicado en Vercel: `dpl_7oSA677NtE3xhPueaNBxAMA5Tmts`
- Ultimo deploy publicado en Netlify antes del bloqueo: `6a1a3a8fa550af56615860ad`
- Netlify bloqueado por `usage_exceeded` / `Forbidden`; usar Vercel para testers web y Android `1.0.5` mientras se resuelve.

## Arquitectura

FlipCards es una app web vanilla. No usa React, Vite, Next ni bundler principal.

Archivos principales:

- `index.html`: estructura de la app.
- `styles.css`: estilos completos, tema claro/oscuro, tarjetas, perfil y estudio.
- `script.js`: estado, navegacion, estudio, tarjetas, progreso y UI.
- `data/standards/pmbok-8.json`: catalogo PMBOK 8 local.
- `data/standards/bundle.js`: bundle JS usado para que el estandar cargue tambien en `file://`.
- `api/definition.js`: endpoint compartido para definiciones con IA.
- `netlify/functions/definition.js`: adaptador Netlify del endpoint anterior.
- `vercel.json`: configuracion Vercel para publicar `dist/` y servir `/api/definition`.
- `scripts/build-netlify.mjs`: copia la app a `dist/` para Netlify/Vercel.
- `android-twa/`: proyecto Android Trusted Web Activity.
- `play-store/release/`: APK/AAB y manifiesto de release.

Persistencia:

- La app usa `localStorage` para progreso, biblioteca, estandar activo, sets manuales, tema y memoria de estudio.
- No hay base de datos ni login.

## Comandos de verificacion

Desde la raiz de esta carpeta:

```sh
node --check script.js
npm test
npm run build
```

Para correr local:

```sh
npm run dev
```

El servidor local sirve en:

```text
http://127.0.0.1:4173/index.html
```

Tambien se puede abrir `index.html` con `file://`; el PMBOK 8 debe cargar por `data/standards/bundle.js`. Algunas capacidades como manifest/API pueden tener restricciones normales en `file://`.

## Netlify

Configuracion:

- `netlify.toml`
- Publish directory: `dist`
- Build command: `npm run build`
- Function route: `/api/definition`
- Site vinculado en `.netlify/state.json`

Deploy:

```sh
npx netlify status
npx netlify deploy --prod --dir dist --functions netlify/functions
```

No publiques si `npm test` o `npm run build` fallan.

## Vercel

Configuracion:

- `vercel.json`
- Project: `flipcards-mobile`
- Production URL: `https://flipcards-mobile.vercel.app`
- Build command: `npm run build`
- Output directory: `dist`
- Function route: `/api/definition`
- La variable `OPENAI_API_KEY` esta configurada en Production.

Deploy:

```sh
npx vercel pull --yes --environment production
npx vercel build --prod --yes
npx vercel deploy --prebuilt --prod --yes
```

No publiques si `node --check script.js`, `npm test` o `npm run build` fallan.
El APK/TWA `1.0.5` apunta a Vercel. Los APK anteriores `1.0.4` siguen abriendo
Netlify.

## Android TWA

El contenedor Android apunta a:

```text
https://flipcards-mobile.vercel.app
```

Archivos versionados que deben mantenerse sincronizados al subir version:

- `android-twa/twa-manifest.json`
- `android-twa/app/build.gradle`
- `android-twa/RELEASE_CHECKLIST.md`
- `play-store/release/MANIFEST.md`

Build Android en esta Mac:

```sh
cd android-twa
JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home" \
ANDROID_HOME="$HOME/Library/Android/sdk" \
./gradlew assembleRelease bundleRelease
```

Salidas principales:

- APK: `android-twa/app/build/outputs/apk/release/app-release.apk`
- AAB: `android-twa/app/build/outputs/bundle/release/app-release.aab`

Copias de release:

- `play-store/release/flipcards-1.0.5-6-sideload.apk`
- `play-store/release/flipcards-1.0.5-6-release.aab`
- `play-store/release/flipcards-latest.apk`

## Secretos y archivos sensibles

Esta copia conserva archivos locales necesarios para firmar APK en esta maquina:

- `android-twa/signing.properties`
- `android-twa/android.keystore`

Reglas:

- No imprimas estos valores en chat.
- No los subas a repositorios.
- No los copies a documentacion publica.
- `.gitignore` ya protege esas rutas, pero revisa antes de cualquier commit.

Variables de entorno:

- `OPENAI_API_KEY` se usa en Netlify/local backend para definiciones IA.
- No es necesaria para estudiar PMBOK 8 ni para tarjetas manuales.

## Reglas de edicion

- Edita primero archivos fuente raiz (`index.html`, `styles.css`, `script.js`, `data/`, `api/`).
- No edites `dist/` a mano; se regenera con `npm run build`.
- Evita tocar APK/AAB antiguos salvo que estes haciendo release.
- Si cambias PMBOK 8 o `data/standards/*.json`, actualiza/regenera `data/standards/bundle.js` para que `file://` siga funcionando.
- Si cambias UI importante, verifica mobile y desktop cuando sea posible.
- Si cambias gestos/tarjeta, revisa que click, pointer, swipe y estado flipped no se bloqueen entre si.
- Si cambias Android, sube `versionCode` antes de entregar APK a celular.

## Checkpoints

La convencion del proyecto esta en `check points/`.

Un checkpoint util debe tener:

- Un HTML descriptivo en `check points/<numero-nombre>.html`.
- Una carpeta `check points/<numero-nombre>/`.
- Un `README.md`.
- Una carpeta `source/` con copia restaurable, evitando caches y secretos.

Checkpoint actual:

```text
check points/18-post-parallel-audit/
```

## Nota para agentes futuros

Esta carpeta es la nueva linea de trabajo. No modifiques `/Users/mac/Documents/App01. FlipCards` salvo que el usuario lo pida expresamente.
