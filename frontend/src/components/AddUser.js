import React from 'react'

const AddUser = () => {
  return (
    <form action="" method="get" class="form-example">
      <div class="form-example">
        <label for="name">Enter your name: </label>
        <input type="text" name="name" id="name" required/>
      </div>
      <div class="form-example">
        <label for="email">Enter your image URL: </label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div class="form-example">
        <label for="email">Enter your bio: </label>
        <input type="email" name="email" id="email" required/>
      </div>
      <div class="form-example">
        <input type="submit" value="Create a new profile"/>
      </div>
    </form>
  )
}

export default AddUser
