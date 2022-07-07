// const Details = () => {
//   return <h2>hi!</h2>;
// };

// export default Details;

// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

// export default Details;

// replace Details.js
import { Component } from "react";
import { useParams } from "react-router-dom";
// import at top
import Carousel from "./Carousel";

// add import
import ErrorBoundary from "./ErrorBoundary";

import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  // replace constructor
  state = { loading: true, showModal: false };

  //   constructor() {
  //     super();
  //     this.state = { loading: true };
  //   }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        {/* first component inside div.details */}
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>

          {/* replace button */}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {/* <button>Adopt {name}</button> */}
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// const WrappedDetails = () => {
//   const params = useParams();
//   return <Details params={params} />;
// };

// replace WrappedDetails
const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
