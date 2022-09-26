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