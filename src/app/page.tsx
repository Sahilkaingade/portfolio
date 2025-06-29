'use client';

import React from 'react';
import Header from '@/component/header/page';
import HomePage from './pages/home/page';
import SkillsPage from './pages/skills/page';

export default function MainPage() {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}
