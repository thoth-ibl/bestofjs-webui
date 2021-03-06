import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const IconCell = styled.div`
  padding-right: 0.5rem;
`

const MainCell = styled.div`
  flex-grow: 1;
`

const NewsHeader = ({ children, icon }) => {
  return (
    <Div>
      <IconCell>
        <span
          className={`mega-octicon octicon-${icon}`}
          style={{ color: '#fa9e59' }}
        />
      </IconCell>
      <MainCell>{children}</MainCell>
    </Div>
  )
}

NewsHeader.Title = styled.span`
  font-size: 1.5rem;
`

NewsHeader.SubTitle = styled.div`
  font-size: 1rem;
  color: #aaa;
  text-transform: uppercase;
`

export default NewsHeader
