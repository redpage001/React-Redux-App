import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchCard } from "../store/actions/yugiohActions";

const YugiohCard = props => {
    console.log({props})
    useEffect(() => {
        props.fetchCard();
      }, []);

    return (
        <div>
            <h1>YU-GI-OH Card Generator</h1>
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}

            {props.image && <img src={props.image} />}
            <div className="cardContainer">
                {props.name && <h2>{props.name}</h2>}
                {props.type && <span>{props.type}</span>}
                <div className="statContainer">
                  {props.atk && <p>Atk/ {props.atk}</p>}
                  {props.def && <p>Def/ {props.def}</p>}
                </div>
                {props.desc && <p>{props.desc}</p>}
                {props.error && <p className="error">{props.error}</p>}
            </div>
            <button onClick={props.fetchCard}>Draw New Card</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
      name: state.yugiohReducer.name,
      image: state.yugiohReducer.image,
      type: state.yugiohReducer.type,
      desc: state.yugiohReducer.desc,
      atk: state.yugiohReducer.atk,
      def: state.yugiohReducer.def,
      isFetching: state.yugiohReducer.isFetching,
      error: state.yugiohReducer.error
    };
  };

export default connect(mapStateToProps, { fetchCard })(YugiohCard);