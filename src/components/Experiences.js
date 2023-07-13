import React from 'react'
import '../styles/Experiences.css'

export default function Experiences() {
  return (
    <>
    <div id="experiences">
        <h1 className="h-bold">EXPERIENCES</h1>
        <p className="h-medium">How was your internship? How did you get selected? What did you work on? What did you like about it the most? How did your contest go? We invite students to share their experiences on the same. <br/> Finally, we publish them here. <br/> <br/> Use this button to share your own experience.</p>
        <button className="btn"><a className="h-medium" href="./">Share your story</a></button>
        <div className="container h-bold">
            <a className="subunit-1" href="/">Alumni Corner</a>
            <a className="subunit-2" href="/">The Quill</a>
            <a className="subunit-1" href="/">Student Archieve</a>
            <a className="subunit-2" href="/">QnA with Faculty</a>
        </div>
        <form className="search" action="backend.php">
            <input type="text" placeholder="What are you looking for......"/>
            <div className="i-search">
                <img src="/Images/search.png" alt="" />
            </div>
        </form>
    </div>
    </>
  )
}
