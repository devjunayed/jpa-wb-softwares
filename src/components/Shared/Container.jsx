/* eslint-disable react/prop-types */

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1290px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
