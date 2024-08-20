import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

const getPlanOptions = (t: TFunction<"translation", undefined>) => [
  {
    id: "premium-plus",
    value: t('premium_plus.title'),
    title: t('premium_plus.title'),
    subtitle: t('premium_plus.subtitle'),
    details: [
      { title: t('price_per_month'), description: t('premium_plus.price_per_month') },
      { title: t('video_audio_quality'), description: t('premium_plus.video_audio_quality') },
      { title: t('resolution'), description: t('premium_plus.resolution') },
      { title: t('spatial_audio'), description: t('premium_plus.spatial_audio') },
      { title: t('compatible_devices'), description: t('premium_plus.compatible_devices') },
      { title: t('ads'), description: t('premium_plus.ads') }
    ]
  },
  {
    id: "premium",
    value: t('premium.title'),
    title: t('premium.title'),
    subtitle: t('premium.subtitle'),
    details: [
      { title: t('price_per_month'), description: t('premium.price_per_month') },
      { title: t('video_audio_quality'), description: t('premium.video_audio_quality') },
      { title: t('resolution'), description: t('premium.resolution') },
      { title: t('compatible_devices'), description: t('premium.compatible_devices') },
      { title: t('ads'), description: t('premium.ads') }
    ]
  },
  {
    id: "standard",
    value: t('standard.title'),
    title: t('standard.title'),
    subtitle: t('standard.subtitle'),
    details: [
      { title: t('price_per_month'), description: t('standard.price_per_month') },
      { title: t('video_audio_quality'), description: t('standard.video_audio_quality') },
      { title: t('resolution'), description: t('standard.resolution') },
      { title: t('compatible_devices'), description: t('standard.compatible_devices') },
      { title: t('ads'), description: t('standard.ads') }
    ]
  }
]

export default function usePlanOptions() {
  const { t } = useTranslation()
  return getPlanOptions(t)
}
