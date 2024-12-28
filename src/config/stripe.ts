export const STRIPE_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51PJI3VClmigcXiKNDAH2mwGO0NAeQ6gyfXaORD0z4FILuCcql6YL6kzrAuOYSBGcVLphs0eKs8f84jnT63huFSLE00xWUpIarV',
  products: {
    starter: {
      monthly: 'price_1QSVTyClmigcXiKN3g2F7KUQ',  // $20/month Starter plan
      yearly: 'price_1QUhvPClmigcXiKNwfuRxOpI'   // $216/year Starter plan (10% discount)
    },
    explorer: {
      monthly: 'price_1QSVWoClmigcXiKNsjgTPayL',  // $50/month Explorer plan
      yearly: 'price_1QUiFfClmigcXiKNmoImgSMU'   // $540/year Explorer plan (10% discount)
    },
    pro: {
      monthly: 'price_1QSVXqClmigcXiKNyYZtcj2p',  // $100/month Pro plan
      yearly: 'price_1QUiGKClmigcXiKNpTnTz6aM'   // $1080/year Pro plan (10% discount)
    }
  },
  baseUrl: typeof window !== 'undefined' ? window.location.origin : 'https://quiet-strudel-de5633.netlify.app',
  webhookUrl: 'https://wttwdqxijxvzylavmsrw.functions.supabase.co/stripe-webhook',
  successPath: '/subscription/success',
  cancelPath: '/pricing'
};