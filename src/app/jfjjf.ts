// // Angular Directives: ngClass and ngStyle
// ngClass
// ngClass allows you to dynamically add or remove CSS classes based on component properties or conditions.

// Usage Examples:

// Using an Object:

// html
// Copy code
// <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
//   Conditional Classes
// </div>
// Using an Array:

// html
// Copy code
// <div [ngClass]="[classOne, classTwo]">
//   Multiple Classes
// </div>
// Using a String:

// html
// Copy code
// <div [ngClass]="currentClass">
//   Current Class
// </div>
// ngStyle
// ngStyle allows you to dynamically apply inline styles based on component properties.

// Usage Example:

// html
// Copy code
// <div [ngStyle]="{'background-color': bgColor, 'font-size': fontSize + 'px'}">
//   Dynamic Styles
// </div>
// Example Component
// typescript
// Copy code
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `
//     <button (click)="toggleActive()">Toggle Active</button>
//     <div [ngClass]="{'active': isActive, 'disabled': isDisabled}" 
//          [ngStyle]="{'background-color': bgColor, 'font-size': fontSize + 'px'}">
//       Conditional Styles and Classes
//     </div>
//   `,
//   styles: [`
//     .active { color: green; }
//     .disabled { color: red; }
//   `]
// })
// export class DemoComponent {
//   isActive = false;
//   isDisabled = false;
//   bgColor = 'lightblue';
//   fontSize = 16;

//   toggleActive() {
//     this.isActive = !this.isActive;
//     this.isDisabled = !this.isDisabled; // Just for demonstration
//   }
// }
// Summary
// ngClass: Dynamically add/remove CSS classes.
// ngStyle: Dynamically apply inline styles.