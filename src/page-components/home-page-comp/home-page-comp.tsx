import { Fragment } from "react"
import { Timeline, TimelineEvent } from "react-event-timeline"
import styles from "./home-page-component.module.css"
import { Button, Card, Heading, ScrollUp, Text } from "@/src/components"
import { company, timeLineList } from "@/src/helpers/constants"
import Navbar from "@/src/layout/navbar/navbar"
import Footer from "@/src/layout/footer/footer"
import HeroImage from "./hero.svg"

const HomePageComponent = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <Heading tag="h1">Learn New Skills Online With MuhsDev</Heading>
          <Text>
            Explore endless possibilities and cultivate your talents with MuhsDev, your premier online destination to learn new skills. Unlock a world of knowledge and growth through interactive courses and expert guidance tailored to fuel your personal and professional development.
          </Text>
          <Button appearance="success" arrow="right">
            Join For Free
          </Button>
        </div>

        <div className={styles.heroImage}>
					<HeroImage />
        </div>
      </div>

      <div className={styles.company}>
				<Heading tag='h3'>Trusted by the world's best</Heading>
				<div className={styles.companyIcon}>
					{company.map((icon, idx) => (
						<Fragment key={idx}>{icon}</Fragment>
					))}
				</div>
			</div>

      <div className={styles.timeline}>
				<Heading tag='h3'>What we can teach you</Heading>
				<div className={styles.timelineCard}>
					<Timeline lineColor='#ddddd'>
						{timeLineList.map(({ Icon, title, text }, idx) => (
							<TimelineEvent
								key={idx}
								title={title}
								icon={<Icon />}
								bubbleStyle={{ borderColor: '#140342', backgroundColor: '#fff' }}
								contentStyle={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
								titleStyle={{ fontSize: '20px' }}
							>
								<Card color='white'>
									<Text>{text}</Text>
								</Card>
							</TimelineEvent>
						))}
					</Timeline>
				</div>
				<div className={styles.mobileTimeline}>
					{timeLineList.map((data, idx) => (
						<Card color='white' className={styles.card} key={idx}>
							<Heading tag='h3'>{data.title}</Heading>
							<Text>{data.text}</Text>
						</Card>
					))}
				</div>
			</div>

      {/* @ts-expect-error */}
      <ScrollUp />
      <Footer />
    </div>
  )
}

export default HomePageComponent