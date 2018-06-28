## ANGULAR GUIDE


# ANGULAR COMPONENT

Made up of three parts 
i. TEMPLATE - which represents the view (created using HTML)

ii. CLASS - nothing but code that supports the view (created using typescript)
			contains data properties and methods and can be used to control the logic of the view.

iii. METADATA - information angular needs to decide if the particular class is in fact an angular
				component or just a regular class.
				(defined using a decorator)



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