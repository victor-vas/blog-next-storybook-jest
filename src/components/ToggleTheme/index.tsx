import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'dark') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
