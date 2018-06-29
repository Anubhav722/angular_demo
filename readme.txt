## ANGULAR GUIDE


# ANGULAR COMPONENT

Made up of three parts 
i. TEMPLATE - which represents the view (created using HTML)

ii. CLASS - nothing but code that supports the view (created using typescript)
			contains data properties and methods and can be used to control the logic of the view.

iii. METADATA - information angular needs to decide if the particular class is in fact an angular
				component or just a regular class.
				(defined using a decorator)


Creating an angular component (cli): `ng g c <component-name>`

## ATTRIBUTES AND PROPERTY

Attributes and property are not the same.
In binding app, have added a input type field
In the browser console, 

$0.getAttribute('value')
---> Displays "Anubhav"

$0.value
---> Displays "Anubhav"

On changing the text from the browser i.e. "Anubhav" --> "Changed".

$0.getAttribute('value')
---> Displays "Anubhav"

$0.value
---> Displays "Changed"

Attributes are defined by the HTML
Properties are defined by DOM(Document Model Object)

Attributes initialize DOM properties and then they are done. Attributes values cannot change
once they are initialized.

Property values can change

## STRUCTUREL DIRECTIVES

directives that let you add or remove HTML elements from the DOM.
Commonly used structural directives:
 * ngIf  -- used to conditionally render HTML elements
 * ngSwitch -- used to conditionally render HTML elements
 * ngFor -- used to render a list of HTML elements


## DESIGN PATTERN
DI AS DESIGN PATTERN

DI is a coding pattern i which a class receives its dependencies from external sources rather than
creating them itself.

## SERVICE

A class with a specific purpose
 * Share data
 * Implement application logic
 * External interaction (interaction with the database)

Naming convention: .service.ts


## DI as a framework contd.

1. Define the EmployeeService class.
2. Register with injector
3. Declare as dependency in EmpList and EmpList

Creating a service using angular cli: `ng g s <service-name>`.

Hierarchial DI in Angular

Always register the service in the module level.
Include it by writing in the `app.module.ts` in the providers array.

## OBSERVABLES

A sequence of items that arrive asynchronously over time.

HTTP call -- single item
Single item -- HTTP Response

HTTP, Observables and RxJS

1. HTTP get requests from EmpService
2. Receive the observable and cast it into an employee array
3. Subsribe to the observable from EmpList and EmpDetail
4. Assign the employee array to a local variable.

RxJS
- Reactive extensions for JavaScript
- External libraries to work with observables.