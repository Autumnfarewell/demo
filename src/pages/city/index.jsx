import React, { useEffect } from 'react'

export default function City () {
  useEffect(() => {
    // 定义data数据
    const data = [
      { id: 1, type: "province", displayName: "广东省", parentId: null },
      { id: 2, type: "province", displayName: "广西省", parentId: null },
      { id: 3, type: "city", displayName: "东莞市", parentId: 1 },
      { id: 4, type: "city", displayName: "广州市", parentId: 1 },
      { id: 5, type: "city", displayName: "深圳市", parentId: 1 },
      { id: 6, type: "city", displayName: "南宁", parentId: 2 },
      { id: 7, type: "city", displayName: "玉林", parentId: 2 },
      { id: 8, type: "area", displayName: "松山湖片区", parentId: 3 },
      { id: 9, type: "area", displayName: "东部产业园", parentId: 3 },
      { id: 10, type: "area", displayName: "滨海区", parentId: 3 },
      { id: 11, type: "area", displayName: "天河区", parentId: 4 },
      { id: 12, type: "area", displayName: "番禺区", parentId: 4 },
      { id: 13, type: "area", displayName: "宝安区", parentId: 5 },
      { id: 14, type: "area", displayName: "南山区", parentId: 5 },
      { id: 15, type: "area", displayName: "兴宁区", parentId: 6 },
      { id: 16, type: "area", displayName: "玉州区", parentId: 7 },
    ];

    const provinceSelect = document.getElementById('provinceSelect');
    const citySelect = document.getElementById('citySelect');
    const areaSelect = document.getElementById('areaSelect');

    // 生成省的选项
    data.filter(item => item.type === 'province').forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.text = item.displayName;
      provinceSelect.appendChild(option);
    });

    // 监听省的选择变化，根据选择的省，生成对应的城市选项
    provinceSelect.addEventListener('change', () => {
      const selectedProvinceId = Number(provinceSelect.value);
      // 清空城市和区的选项
      citySelect.innerHTML = '';
      areaSelect.innerHTML = '';

      // 生成城市的选项
      data.filter(item => item.type === 'city' && item.parentId === selectedProvinceId).forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.displayName;
        citySelect.appendChild(option);
      });

      // 触发城市选择的 change 事件，更新区的选项
      citySelect.dispatchEvent(new Event('change'));
    });

    // 监听城市的选择变化，根据选择的城市，生成对应的区选项
    citySelect.addEventListener('change', () => {
      const selectedCityId = Number(citySelect.value);
      // 清空区的选项
      areaSelect.innerHTML = '';

      // 生成区的选项
      data.filter(item => item.type === 'area' && item.parentId === selectedCityId).forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.displayName;
        areaSelect.appendChild(option);
      });
    });

    // 初始化省的选项
    provinceSelect.dispatchEvent(new Event('change'));
  }, [])

  return (
    <>
      <select id="provinceSelect"></select>
      <select id="citySelect"></select>
      <select id="areaSelect"></select>
    </>
  )
}