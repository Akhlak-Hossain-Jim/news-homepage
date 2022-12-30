import React from "react";
import styled from "styled-components";

export default function Home() {
  const rightNewses = [
    {
      name: "Hydrogen VS Electric Cars",
      href: "",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      name: "The Downsides of AI Artistry",
      href: "",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      name: "Is VC Funding Drying Up?",
      href: "",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  const newses = [
    {
      id: "01",
      name: "Reviving Retro PCs",
      href: "",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: "02",
      name: "Top 10 Laptops of 2022",
      href: "",
      description: "Our best picks for various needs and budgets.",
    },
    {
      id: "03",
      name: "The Growth of Gaming",
      href: "",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <Container>
      <div className="hero">
        <div className="hero_left">
          <div className="hero_left__image">
            <img src="/images/hero.jpg" alt="hero artwork" />
          </div>
          <div className="hero_left__content">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="hero_left__content_right">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="hero_right">
          <h2>New</h2>
          {React.Children.toArray(
            rightNewses.map((news) => (
              <div className="hero_right__news">
                <a
                  href={news.href}
                  onClick={(e) => !news.href && e.preventDefault()}
                >
                  {news.name}
                </a>
                <p>{news.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="news_con">
        {React.Children.toArray(
          newses.map((news) => (
            <div className="news_con__item">
              <div className="news_con__item_image">
                <img src={`/images/${news.id}.jpg`} alt={news.name} />
              </div>
              <div className="news_con__item_content">
                <h3>{news.id}</h3>
                <a
                  href={news.href}
                  onClick={(e) => !news.href && e.preventDefault()}
                >
                  {news.name}
                </a>
                <p>{news.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

const Container = styled.main`
  padding: 40px 0;
  .hero {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    @media (max-width: 768px) {
      grid-template-columns: 3fr 2fr;
    }
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    &_left {
      &__image {
        width: 100%;
        height: 300px;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding-top: 30px;
        align-items: center;
        @media (max-width: 548px) {
          padding-top: 24px;
          grid-template-columns: 1fr;
          gap: 15px;
        }
        & > h1 {
          font-style: normal;
          font-weight: 800;
          font-size: 56px;
          line-height: 100%;
          color: var(--dark);
          @media (max-width: 548px) {
            font-size: 40px;
          }
        }
        &_right {
          display: flex;
          flex-direction: column;
          gap: 36px;
          @media (max-width: 548px) {
            gap: 25px;
          }
          & > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: -0.03em;
            color: var(--gray-dark);
          }
          & > a {
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.31em;
            text-transform: uppercase;
            padding: 14px 36px 13px 31px;
            background-color: var(--red);
            color: var(--white);
            text-decoration: none;
            width: max-content;
            &:hover {
              background-color: var(--dark);
            }
          }
        }
      }
    }
    &_right {
      padding: 28px 24px 2px;
      background-color: var(--dark);
      & > h2 {
        font-weight: 800;
        font-size: 40px;
        line-height: 48px;
        color: var(--orange);
        @media (max-width: 548px) {
          font-size: 32px;
          line-height: 39px;
        }
      }
      &__news {
        padding: 29px 0;
        display: flex;
        flex-direction: column;
        gap: 9px;
        &:not(:last-child) {
          border-bottom: 1px solid var(--gray-dark);
        }
        & > a {
          font-weight: 800;
          font-size: 20px;
          line-height: 24px;
          color: var(--white);
          text-decoration: none;
          &:hover {
            color: var(--orange);
          }
        }
        & > p {
          font-weight: 400;
          font-size: 15px;
          line-height: 170%;
          color: var(--gray);
        }
      }
    }
  }
  .news_con {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    padding: 71px 0 55px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
      padding: 64px 0 67px;
      gap: 32px;
    }
    &__item {
      display: flex;
      gap: 24px;
      &_image {
        width: 100px;
        & > img {
          width: 100%;
          height: auto;
        }
      }
      &_content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
        & > h3 {
          padding-bottom: 3px;
          font-weight: 800;
          font-size: 32px;
          line-height: 100%;
          color: var(--gray);
        }
        & > a {
          font-weight: 800;
          font-size: 18px;
          line-height: 100%;
          color: var(--dark);
          text-decoration: none;
          &:hover {
            color: var(--red);
          }
        }
        & > p {
          font-weight: 400;
          font-size: 15px;
          line-height: 170%;
          color: var(--gray-dark);
        }
      }
    }
  }
`;
