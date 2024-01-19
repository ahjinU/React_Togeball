import { InputBox,SignButton, Button, Select, Title, KakaoIcon, 
  NaverIcon, MainLayout } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { styled } from 'styled-components'


const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const IconWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const dataSource = [
  { value: 'Kakao', name: 'Kakao' },
  { value: 'Naver', name: 'Naver' },
]

const Dev = () => {
  const navigator = useNavigate()

  const onLogin = useCallback(() => {
    navigator('/login')
  }, [])

  const participate = useCallback(() => {
    navigator('/participate')
  }, [])

  return (
    <MainLayout>
    
      
      <Button type='cancel'>취소</Button>
      <Button type='parti'  onClick={ participate }>참가하기</Button>
      <Button type='save' onClick={ participate }>저장</Button>
      <Button type='reset' onClick={ participate }>초기화</Button>
      <SignButton>로그인</SignButton>
    </MainLayout>
  )
}

export default Dev
