/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding refers to all of javascript.

* 2. Implicit binding this refers to whatever is left of the dot in dot notation. Otherwise the object its in.

* 3. New binding this refers to the object that is created that is using the constructor function.

* 4. Explicit binding uses .call and .apply to override what the constructor function gets assigned. Apply has a feature to override arrays.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)

// Principle 2
// code example for Implicit Binding
const oldCartoons = {
    favorite:'Ed, Edd, n Eddy',
    meh:'Ren & Stimpy',
    otherfav: function(show){
        console.log(`${this.favorite} is a favorite cartoon but ${show} is another good one.`);
    }
};
oldCartoons.otherfav('Rocket Power');
// Principle 3
// code example for New Binding
function Bible(books) {
    this.thegospels = books.gospel;
    this.theepistles = books.epistle;
    //console.log(this);
    this.paragraph = function() {
        return `One section of the bible is gospels. Including ${this.gospel}. Another is epistles which include ${this.epistle}.`
    }
};
const pages = new Bible({gospel:'Matthew', epistle:'2 Peter'});
const chapter = new Bible({gospel:'John', epistle:'James'});
console.log(chapter.paragraph());

// Principle 4

// code example for Explicit Binding
console.log(chapter.paragraph.call(pages));
console.log(pages.paragraph.call(chapter));