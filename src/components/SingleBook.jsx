import { Component } from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  toggleSelection = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  render() {
    return (
      <a href="#" onClick={this.toggleSelection}>
        <div
          className={`rounded flex flex-col h-96 justify-between p-2 filter drop-shadow-lg ${
            this.state.isSelected
              ? "bg-indigo-600 text-white"
              : "bg-white text-black"
          }`}
        >
          <img src={this.props.img} alt="bookimage" className="h-60 rounded" />
          <h2 className="font-bold ">{this.props.title}</h2>
          <p>
            Categoria: <strong>{this.props.category}</strong>
          </p>
          <p className="font-bold">{this.props.price}$</p>
        </div>
      </a>
      //   <div className="bg-white rounded flex">
      //     <img src="https://placecats.com/300/200" alt="bookimage" />
      //     <h2>Titolo Libro</h2>
      //     <p>Categoria Libro</p>
      //     <p>99.99$</p>
      //   </div>
    );
  }
}

export default SingleBook;
