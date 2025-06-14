import router from '@/router';
import { ROUTER_PATHS } from '@/router';

export const goBack = () => router.back();

export const onCardClick = (slug: string) => {
  const productSlug = `${ROUTER_PATHS.PRODUCT}/${slug}`;
  router.push(`${productSlug}`);
};

export const goToCatalog = () => router.push(ROUTER_PATHS.CATALOG);

export const goToNotFound = () => router.push(ROUTER_PATHS.NOT_FOUND_404);

export const goToOrderConfirmation = () => router.push(ROUTER_PATHS.ORDER_CONFIRMATION);
