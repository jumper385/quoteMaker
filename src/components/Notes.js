import React from 'react'
import { connect } from 'react-redux'

const Notes = props => (
    <div>
        <h3>Notes</h3>
        {props.notes.map((note, index) => (<p key={index}>{note.note}</p>)) || 'null'}
    </div>
)

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(Notes)