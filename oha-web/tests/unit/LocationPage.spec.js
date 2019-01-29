import { shallowMount } from '@vue/test-utils';
import LocationPage from '@/components/locations/LocationPage.vue';

describe('LocationPage.vue', () => {
  const wrapper = shallowMount(LocationPage, {
    mocks: {
      $store: {
        state: {},
        commit: () => {},
      },
      $i18n: {
        locale: '',
      },
      $t: () => {},
    },
  });

  it('locationErrorMessage should be an empty string', () => {
    expect(wrapper.vm.locationErrorMessage).toBe('');
  });

  it('isPopoverShown should be false', () => {
    expect(wrapper.vm.isPopoverShown).toBe(false);
  });

  it('isLoading should be false', () => {
    expect(wrapper.vm.isLoading).toBe(false);
  });
});
