# 🧭 Convenciones del Proyecto: marcdevelopez-portfolio

## 🗂️ Convención de ramas

Las ramas deben seguir este patrón:

- `main` → Rama principal (producción).
- `docs/...` → Documentación o contenido legal, CV, etc.
- `feat/...` → Nuevas funcionalidades.
- `fix/...` → Correcciones de errores.
- `chore/...` → Tareas menores (nombres, configuración).
- `refactor/...` → Reestructuración sin cambios de comportamiento.
- `style/...` → Cambios visuales (UI/UX, estilos CSS, clases Tailwind).
- `test/...` → Pruebas, validaciones o ejemplos.

Ejemplos:

```

docs/license-page-shuttlebiz
feat/contact-form
fix/escape-quotes-build-error

```

---

## 🧾 Convención de commits

Formato:

```

<tipo>(opcional: área): descripción breve en minúscula

```

### Tipos aceptados:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación o contenido textual
- `style`: Cambios de estilo (CSS, Tailwind)
- `refactor`: Reorganización de código sin cambio funcional
- `chore`: Tareas menores o sin lógica (nombres, favicon, etc.)
- `test`: Añadir o actualizar tests

✅ Ejemplos:

```

feat(projects): add flutter-dart-labs and flutter_map_experiments cards
docs: create license page for ShuttleBiz
fix: escape final quote for vercel build
chore: update name from Marc to Marcos

```

---

## 🧪 Flujo de trabajo sugerido

1. Crear rama nueva: `git checkout -b tipo/nombre-de-cambio`
2. Hacer los cambios
3. Probar en local (`npm run dev`)
4. Commit + push:
   ```bash
   git add .
   git commit -m "feat(license): add legal page for ShuttleBiz"
   git push origin tipo/nombre-de-cambio
   ```

```

---

## 🤝 Contacto

Para dudas o permisos especiales:
📩 `contact@marcdevelopez.com`

```
