import { NavigateFunction, useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';
import svg from 'assets/svg';

import serviceAuth from 'services/serviceAuth';
import { ILogin } from 'domains/interfaces/login';

const ViewLogin = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      mail: '',
      password: '',
      remember: true,
    },
  });

  const { handleSubmit } = methods;

  return (
    <S.Container>
      <S.Body>
        <S.Row>
          <S.Column>
          <S.Title>Saber Global</S.Title>
          <S.TitleBase>
            {"Uma rede focada em promover a educação de qualidade, conectando pessoas, instituições e recursos educacionais de forma colaborativa e    sustentável."}
          </S.TitleBase>
          </S.Column>
          <S.UpperIcon>
            <svg.SDG height={120}/>
            <svg.Onu height={120}/>
          </S.UpperIcon>
        </S.Row>
      </S.Body>
      <S.InnerBody>
        <S.Icon>
        <svg.Globo height={321} onClick={() => {
            navigate('/')
          }} />
        </S.Icon>
        <FormProvider {...methods}>
          <S.Form>
            <S.Input>
              <InputDefault
                label={'Email'}
                position={EInputPosition.right}
                type={EInputType.mail}
                isLowerCase={true}
                name={'mail'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={'************'}
              />
            </S.Input>
            <S.Forgot>
              <LinkLabel label={'esqueci minha senha'} />
            </S.Forgot>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Entrar'}
                  onClick={async () => {
                    const data: ILogin = await methods.getValues();
                    await serviceAuth.onLogin(data, navigate);
                  }}
                />
              </S.Button>
            </S.Buttons>
            <S.Registers>
            <ButtonGo
                  label={'Cadastrar'}
                  onClick={() => { navigate('/register') }} 
                  type={3}
                />
            </S.Registers>
          </S.Form>
        </FormProvider>
      </S.InnerBody>
    </S.Container>
  );
};

export default ViewLogin;
