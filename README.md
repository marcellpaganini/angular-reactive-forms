# angular-reactive-forms  

### Source: https://www.youtube.com/watch?v=0Ywak7Ppszw

## Built With  
* [TypeScript](https://www.typescriptlang.org/docs/// "TypeScript documentation")  
* [Angular](https://angular.io/docs// "Angular Documentation")  

## Getting Started  
### Prerequisites
* [Node.js](https://nodejs.org/en/ "Download Node.js 16.15.0 LTS")  

### Project Setup (VS Code)
* Angular
  * Install Angular CLI globally (one time setup)  
  ```bash
  npm install -g @angular/cli
  ng version
  ```   
  * Open project in vsCode (command run in the project directory)  
  ```bash
  code .
  ```   
  * Create Angular App  
  ```bash
  ng new project-name
  ```    
  * Run the project and open http://localhost:4200   
  ```bash
  ng serve
  ```   

* Create new Angular Component  
  ```bash
  ng generate component component-name
  ```
  * Create new Angular Service  
  ```bash
  ng generate service service-name
  ```

### Topics practiced to get things done  
## Angular  
- Forms  
  - Reactive forms  
  - Validation  
  - Dynamic reactive forms  

### Error messages for future reference  
✖ Error: Invalid Character (typing ng --version in the terminal)   
Solution: Use bash (workaround)   
✖ Error: Property 'name' has no initializer and is not definitely assigned in the constructor.      
Solution: Add ```"strictPropertyInitialization": false``` in the compiler options of the tsconfig.json or a default value to the property.    
✖ Error: Can't bind to 'ngModel' since it isn't a known property of 'input'.      
Solution: Add FormsModule and ReactiveFormsModule to the imports array in app.module.ts.     

## Comments  

### Constructor  
Although not a lifecycle hook, constructor is the first thing called when the component is instantiated. At this moment, the component properties are not accessed yet.  
### ngOnChanges  
Runs everytime component properties are updated. The first update occurs before OnInit. It doesn't run when event is fired up with no property change. It has a SimplesChanges parameter that allows us to access the previous current values of a specific property and check if it's the first change.  
### ngOnInit  
We need to import and implement OnInit in the class declaration.  It is fired once, just after the first change detection cycle. By this time the properties are already accessible and updated. That's the best place to add inilialization logic for the component.   
### ngDoCheck  
It gets called any time the change detection cycle runs. Not just for component propertiy changes, but for anything else. If run an event without changing properties, onchange won't run, but ngDoCheck will.   
### ngAfterContentInit  
This lifcycle hook gets called when all component content has been fully initialized. The content is all html and properties inside the component selector. It is run only once.  
### ngAfterContentChecked  
Gets called whenever the content in the selector changes.  
### ngAfterViewInit  
Gets called when the components view and all its child views are fully initialized. It gets called only once during the first change detection cycle.  
### ngAfterViewChecked    
Gets called whenever there's a change event detection cycle.  
### ngOnDestroy  
ngOnDestroy is run when the component is removed from the DOM. Great place to do some cleanup work.
