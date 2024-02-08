import React from 'react'

const AddTodoForm = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="mt-2">
                        <button className="btn btn-primary">Add Todo </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodoForm
