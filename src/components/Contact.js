import React from 'react'

export default function Contact() {
    return (
       <div className="myForm">
        <div className="form-row">

        <div className="form-group col-md-12">
            <label for="inputEmail4">Full Name</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Full Name" />
            </div>
            
            <div className="form-group col-md-12">
            <label for="inputEmail4">Email</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Email" />
            </div>

            <div className="form-group col-md-12">
            <label for="inputEmail4">Contact No.</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Contact Number" />
            </div>

            <div className="form-group col-md-12">
            <label for="inputEmail4">Message</label>
            <textarea className="form-control" id="inputEmail4" placeholder="Message"></textarea>
            </div>

            <button class="btn btn-success" type="submit">Send Message</button>


    </div>
    </div>

    )
}
