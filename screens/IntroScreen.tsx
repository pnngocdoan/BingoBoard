import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Fonts, FontTracking } from '../constants/fonts';

const { width, height } = Dimensions.get('window');

const GRID_LEFT = width * 0.163; // ~70px on 430pt, ~60px on 360pt — keeps hero aligned to vertical grid line on any screen

const track = (fontSize: number, tracking: number) =>
  (fontSize * tracking) / 1000;

export default function IntroScreen() {

  const headlineSize = 30;
  const lineH = headlineSize * 1.1;
  const brandSize = 36;
  const ctaSize = 30;

  const hs = {
    fontSize: headlineSize,
    lineHeight: lineH,
    letterSpacing: track(headlineSize, FontTracking.heading),
  };

  return (
    <ImageBackground
      source={require('../assets/bg_paper.png')}
      style={styles.bg}
      resizeMode="cover"
    >

      <StatusBar style="dark" />

      {/* decorative layer */}
      <Image
        source={require('../assets/hand_pen.png')}
        style={styles.handPen}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/deco_squiggle.png')}
        style={styles.squiggle}
        resizeMode="contain"
      />

      <SafeAreaView style={styles.safe}>
        <View style={[styles.container]}>

          {/* PENCIL GRID GUIDES */}
          <View style={styles.gridOverlay}>
            <View style={styles.gridLeftLine} />
            <View style={styles.gridBrandLine} />
            <View style={styles.gridHeadlineLine} />
          </View>

          {/* HERO CONTENT */}
          <View style={[styles.hero]}>

            {/* BRAND */}
            <Text
              style={[
                styles.brandTag,
                {
                  fontSize: brandSize,
                  letterSpacing: track(brandSize, FontTracking.body),
                },
              ]}
            >
              BINGO-Z
            </Text>

            {/* HEADLINE */}
            <View style={[styles.headlineWrap]}>

              <Text style={[styles.headline, hs]}>Find to-do lists boring?</Text>
              <Text style={[styles.headline, hs]}></Text>
              <Text style={[styles.headline, hs]}>Vision board full of dreams</Text>
              <Text style={[styles.headline, hs]}>but no actions?</Text>
              <Text style={[styles.headline, hs]}></Text>
              <Text style={[styles.headline, hs]}>Ever heard of bingo board?</Text>

            </View>

            {/* ARROW */}
            <Image
              source={require('../assets/deco_arrow.png')}
              style={styles.ctaArrow}
              resizeMode="contain"
            />

            {/* CTA */}
            <TouchableOpacity
              onPress={() => router.push('/get-started')}
              activeOpacity={0.8}
              style={[styles.ctaWrap]}
            >

              <Text
                style={[
                  styles.ctaText,
                  {
                    fontSize: ctaSize,
                    letterSpacing: track(ctaSize, FontTracking.body),
                  },
                ]}
              >
                NEXT
              </Text>

              <Image
                source={require('../assets/underline_black.png')}
                style={styles.ctaUnderline}
                resizeMode="stretch"
              />

            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  bg: { flex: 1 },
  safe: { flex: 1 },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: height * 0.20,
  },

  /* HERO STACK */

  hero: {
    alignItems: 'flex-start',
    paddingLeft: GRID_LEFT,
    transform: [{ rotate: '-9.4deg' }],
  },

  brandTag: {
    fontFamily: Fonts.body,
    fontWeight: '800',
    color: Colors.black,
    marginBottom: 0,
    paddingBottom: 35
  },

  headlineWrap: {
    alignItems: 'flex-start',
    marginTop: 85
  },

  headline: {
    fontFamily: Fonts.headingItalic,
    color: Colors.black,
    textAlign: 'left',
  },

  takeActionsLine: {
    position: 'relative',
  },

  fanLeft: {
    position: 'absolute',
    left: -65,
    top: -5,
    width: 60,
    height: 60,
    transform: [{ scaleX: -1 }],
  },

  fanRight: {
    position: 'absolute',
    right: -65,
    top: -5,
    width: 60,
    height: 60,
  },

  /* CTA */

  ctaArrow: {
    width: 180,
    height: 120,
    paddingTop: 15,
    left: 10
  },

  ctaWrap: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  ctaText: {
    fontFamily: Fonts.body,
    fontWeight: '800',
    color: Colors.black,

  },

  ctaUnderline: {
    width: 200,
    height: 20,
    marginTop: 4,
  },

  /* DECORATION */

  handPen: {
    position: 'absolute',
    width: width * 0.68,
    height: height * 0.46,
    top: 0,
    right: 0,
    zIndex: 3
  },

  squiggle: {
    position: 'absolute',
    width: 80,
    height: 80,
    left: -3,
    top: height * 0.29,
  },

  /* PENCIL GRID */

  gridOverlay: {
    ...StyleSheet.absoluteFill,
    pointerEvents: 'none',
    transform: [{ rotate: '-9.4deg' }]
  },

  gridLeftLine: {
    position: 'absolute',
    left: GRID_LEFT,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },

  gridBrandLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 210,
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },

  gridHeadlineLine: {
    position: 'absolute',
    left: -30,
    right: 0,
    top: 530,
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },

});
