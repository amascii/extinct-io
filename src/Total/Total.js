import React from 'react'

const total = props => {
    const extinctionRate = props.pessimist ? 0.01 : 0.001;
    const numTotalSpecies = 2000000;
    const numExtinctSpecies = extinctionRate*numTotalSpecies*props.age;

    return (
        <div className="form-group w-75">
            <p>You have murdered {numExtinctSpecies.toLocaleString()} species <em>so far</em>.</p>
            <p>You monster.</p>
            <a className="btn btn-dark btn-lg btn-block mt-3" href="https://www.savethekoala.com/">Save koalas</a>
            <button className="btn btn-dark btn-block mt-3" onClick={props.reset}>Back</button>
        </div>

    );
};

export default total;