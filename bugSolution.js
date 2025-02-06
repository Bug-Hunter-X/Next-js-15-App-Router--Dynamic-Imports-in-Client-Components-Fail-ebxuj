```javascript
// pages/index.js
import { Suspense, lazy } from 'react';

const DynamicComponent = lazy(() => import('./DynamicComponent'));

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
```
```javascript
// pages/DynamicComponent.js

export default function DynamicComponent() {
  return (
    <div>
      <h2>This is the dynamically imported component!</h2>
    </div>
  );
}
```