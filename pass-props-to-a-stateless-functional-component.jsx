
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is:{props.date} </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //see if you want to write some javascript code then you must write in this area although javascript code can be written anywhere in .jsx file but in class protocol some wiered behaviour is seen which is not the case with the current version where we follow non class related protocol.
    // let d=new Date();
    // console.log(d);
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}  />
        { /* Change code above this line */ }
      </div>
    );
  }
};

//Note that we can create react components using normal javascript function without any class or by writing a class and the class name becomes the react component name and whatever we return from the class or the function is the JSX element,in the above example we can see that CurrentDate and Calendar both are react components but Calendar is declared using class and CurrentDate as a normal javascript function.
//Note that the CurretDate is called "stateless functional Component" and Calendar is called an "ES6 class component" but both of them are methods to create react components,the class components are declared so that some special fetures can be utilised.
//Note that in stateless component we access a props as props.name but in class components we access the props as this.props.name i.e. we have to use this keyword in class components while accessing props attrtibutes.
