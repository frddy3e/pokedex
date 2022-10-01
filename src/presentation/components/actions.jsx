import React from "react";
import PropTypes from "prop-types"

/**
 * Actions component: renders a list of actions buttons (Edit and Delete).
 * @component
 * @example
 * return (
 * <Actions />
 * )
 */

const Actions = (props) => {
    const {onEdit, onDelete} = props;
    return <div data-testid="actions">
        <button onClick={onEdit} data-testid="actions-btn-edit">Editar</button>
        <button onClick={onDelete} data-testid="actions-btn-delete">Eliminar</button>
    </div>
}

Actions.defaultProps = {
    onEdit: () => {},
    onDelete: () => {}
}

Actions.propTypes = {
    /**
     * The callback function to be called when the edit button is clicked
     */
    onEdit: PropTypes.func,
    /**
     * The callback function to be called when the delete button is clicked
     */
    onDelete: PropTypes.func
}

     

export default Actions;