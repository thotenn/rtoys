import React from 'react'

export const Container = ({ darkTheme, children }) => {
  return (
    <div className={"portfoliomini-container" + (darkTheme && " dark-theme")}>
        {children}
    </div>
  )
}
