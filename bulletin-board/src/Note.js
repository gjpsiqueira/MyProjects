import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {

	constructor(props) {
		super(props)
		this.edit = this.edit.bind(this)
		this.remove - this.remove.bind(this)
	} 	
	edit() {
		alert("I'm editing...");
	}

	remove() {
		alert("Remove...");
	}
	render() {
		return (

			<div className="note">
				<p>Learning React</p>
				<span>
					<button onClick={this.edit} id="edit"><FaPencil /></button>
					<button onClick={this.remove} id="remove"><FaTrash  /></button>
				</span>
			</div>
		)
	}
}

export default Note;  