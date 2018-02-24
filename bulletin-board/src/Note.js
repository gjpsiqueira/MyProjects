import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FlaFloppy0 from 'react-icons/lib/fa/floppy-o'

class Note extends Component {

	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	} 	
	edit() {
		this.setState({
			editing: true
		})
	}

	remove() {
		alert("Remove...");
	}

	save() {
		alert(this._newText.value)
	}
	renderForm() {

		return (

			<div className="note">
				<form>
					{this._newText}
					<textarea ref={input => this._newText = input}></textarea>
					<button onClick={this.save}><FlaFloppy0/></button>
				</form>
			</div>
		)
	}
	renderDisplay() {
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

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}

export default Note;  