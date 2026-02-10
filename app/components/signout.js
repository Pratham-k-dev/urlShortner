


import React from 'react'

async function signout() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut("google")
      }}
    >
      <button type="submit">Signout</button>
    </form>
  )
}

export default signout
