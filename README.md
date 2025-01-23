# Data-Injection

Showcasing lazy loading of data.

The type of the data (`View`) is defined in `src\app\view\core\view.ts`.
It can be anything you want.

The corresponding injection token is in `src\app\view\core\view-config-injection-token.ts`.

The object `ViewConfig` behind the injection token is in `src\app\view\core\view-config.ts`.

The key is a "load" method, which returns a `Promise` containing the needed data.

There are two instances of data of this type.
One in `src\app\bike\core\bike-view-config.ts` and one in `src\app\car\core\car-view-config.ts`.

There's also the needed "provide" function, to inject the `ViewConfig` into the dependency injection.
The key is to use the `multi: true` property.

The component `SelectView` in `src\app\view\ui\select-view.ts` injects all provided `ViewConfig`s.
With a dropdown the data to be loaded by the resource can be selected.

The lazy loaded "data" is shown below the selector.
Do what you like with that data...
